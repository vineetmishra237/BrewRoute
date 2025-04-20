#[starknet::contract]
mod personal_data {
    use starknet::Storage;
    use core::array::ArrayTrait;

    #[storage]
    struct Storage {
        data: LegacyMap<u128, (Array<u8>, Array<u8>)>
    }

    #[external]
    fn store_info(self: @ContractState, id: u128, name: Array<u8>, address: Array<u8>) {
        self.data.write(id, (name, address));
    }

    #[view]
    fn get_info(self: @ContractState, id: u128) -> (Array<u8>, Array<u8>) {
        self.data.read(id)
    }
}