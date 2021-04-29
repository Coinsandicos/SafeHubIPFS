// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract SafeHubToken is ERC20 {
    constructor() ERC20("test coin", "TTC") {
        _mint(msg.sender, 100);
    }

    function decimals() public view virtual override returns (uint8) {
        return 18;
    }
}