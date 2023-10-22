function groups_parser(raw_groups) {
    console.log(raw_groups)
    let group_list = raw_groups.content.fields.groups.map(group=>{
        return {
            name: group.fields.name,
            members: group.fields.persons.map(person=>{return person.fields.name}),
            transactions: group.fields.cases.map(cas=>{
                return {
                    name: cas.fields.name,
                    amount: cas.fields.val,
                    buyer: cas.fields.owner_addr
                }
            })
        }
    })
    console.log(group_list)
    return {
        username: "Douchenilain",
        group_list: group_list
    }
}

export default groups_parser