class SimpleMembership {
    constructor(name) {
        this.name = name
        this.cost = 50
    }
}

class StandardMembership {
    constructor(name) {
        this.name = name
        this.cost = 150
    }
}

class PremiumMembership {
    constructor(name) {
        this.name = name
        this.cost = 500
    }
}

class MemberGym {
    static list = {
        simple: SimpleMembership,
        standard: StandardMembership,
        premium: PremiumMembership
    }

    create(name, type = 'simple') {
        const Membership = MemberGym.list[type] || MemberGym.list.simple
        const member = new Membership(name)
        member.type = type
        member.define = function() {
            console.log(`${this.name} (${this.type}): ${this.cost}`)
        }
        return member
    }
}

const gym = new MemberGym()

const members = [
    gym.create('Yehor', 'simple'),
    gym.create('Elena', 'premium'),
    gym.create('Vasilisa', 'standard'),
    gym.create('Ivan', 'premium'),
    gym.create('Petr')
]

members.forEach(m => {
    m.define()
})
members.forEach(m => {
    m.define()
})
