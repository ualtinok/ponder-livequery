// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.8.25;

contract Todo {
    uint256 public catCount = 0;

    event NewCategory(address indexed owner, uint256 indexed id, string text);
    event NewTask(address indexed owner, uint256 indexed catId, uint256 indexed taskId, string text);

    error NotCategoryOwner();
    struct Task {
        string content;
        bool completed;
    }

    struct TaskCategory {
        string name;
        Task[] tasks;
        address owner;
    }

    mapping(uint256 => TaskCategory) public taskCategories;

    function createCategory(string memory _name) public {
        TaskCategory storage category = taskCategories[catCount];
        category.name = _name;
        category.owner = msg.sender;
        emit NewCategory(msg.sender, catCount, _name);
        catCount++;
    }

    function createTask(string calldata _content, uint256 catId) public {
        TaskCategory storage category = taskCategories[catId];
        if (category.owner != msg.sender) {
            revert NotCategoryOwner();
        }
        category.tasks.push(Task(_content, false));
        emit NewTask(msg.sender, catId, category.tasks.length -1, _content);
    }
}
