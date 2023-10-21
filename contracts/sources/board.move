module SuiShare::board {
    use std::vector;

    use sui::object::{Self, UID};
    use sui::tx_context::{TxContext, sender};
    use sui::transfer::{transfer, share_object};
    use sui::dynamic_object_field::{Self};

    struct Board has key, store {
        id: UID
    }
}