// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.8.0 <0.9.0;

contract Upload {
    
    mapping(address => string[]) private userFiles;
    modifier onlyOwnerAccess(address _user) {
        require(msg.sender == _user,"You are not authorized");
        _;
    }
    
    function uploadFile(address _user, string memory _ipfsHash) external {
        userFiles[_user].push(_ipfsHash);
    }
    

    function viewFiles(address _user) external view onlyOwnerAccess(_user) returns (string[] memory) {
        return userFiles[_user];
    }
    
}
