import {
  createReadContract,
  createWriteContract,
  createSimulateContract,
  createWatchContractEvent,
} from 'wagmi/codegen'

import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
} from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Todo
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 *
 */
export const todoAbi = [
  {
    type: 'function',
    inputs: [],
    name: 'catCount',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_name', internalType: 'string', type: 'string' }],
    name: 'createCategory',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_content', internalType: 'string', type: 'string' },
      { name: 'catId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'createTask',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'taskCategories',
    outputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'owner', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: true },
      { name: 'text', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'NewCategory',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'catId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'taskId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      { name: 'text', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'NewTask',
  },
  { type: 'error', inputs: [], name: 'NotCategoryOwner' },
] as const

/**
 *
 */
export const todoAddress = {
  31337: '0x5FbDB2315678afecb367f032d93F642f64180aa3',
} as const

/**
 *
 */
export const todoConfig = { address: todoAddress, abi: todoAbi } as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Action
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link todoAbi}__
 *
 *
 */
export const readTodo = /*#__PURE__*/ createReadContract({
  abi: todoAbi,
  address: todoAddress,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link todoAbi}__ and `functionName` set to `"catCount"`
 *
 *
 */
export const readTodoCatCount = /*#__PURE__*/ createReadContract({
  abi: todoAbi,
  address: todoAddress,
  functionName: 'catCount',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link todoAbi}__ and `functionName` set to `"taskCategories"`
 *
 *
 */
export const readTodoTaskCategories = /*#__PURE__*/ createReadContract({
  abi: todoAbi,
  address: todoAddress,
  functionName: 'taskCategories',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link todoAbi}__
 *
 *
 */
export const writeTodo = /*#__PURE__*/ createWriteContract({
  abi: todoAbi,
  address: todoAddress,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link todoAbi}__ and `functionName` set to `"createCategory"`
 *
 *
 */
export const writeTodoCreateCategory = /*#__PURE__*/ createWriteContract({
  abi: todoAbi,
  address: todoAddress,
  functionName: 'createCategory',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link todoAbi}__ and `functionName` set to `"createTask"`
 *
 *
 */
export const writeTodoCreateTask = /*#__PURE__*/ createWriteContract({
  abi: todoAbi,
  address: todoAddress,
  functionName: 'createTask',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link todoAbi}__
 *
 *
 */
export const simulateTodo = /*#__PURE__*/ createSimulateContract({
  abi: todoAbi,
  address: todoAddress,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link todoAbi}__ and `functionName` set to `"createCategory"`
 *
 *
 */
export const simulateTodoCreateCategory = /*#__PURE__*/ createSimulateContract({
  abi: todoAbi,
  address: todoAddress,
  functionName: 'createCategory',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link todoAbi}__ and `functionName` set to `"createTask"`
 *
 *
 */
export const simulateTodoCreateTask = /*#__PURE__*/ createSimulateContract({
  abi: todoAbi,
  address: todoAddress,
  functionName: 'createTask',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link todoAbi}__
 *
 *
 */
export const watchTodoEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: todoAbi,
  address: todoAddress,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link todoAbi}__ and `eventName` set to `"NewCategory"`
 *
 *
 */
export const watchTodoNewCategoryEvent = /*#__PURE__*/ createWatchContractEvent(
  { abi: todoAbi, address: todoAddress, eventName: 'NewCategory' },
)

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link todoAbi}__ and `eventName` set to `"NewTask"`
 *
 *
 */
export const watchTodoNewTaskEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: todoAbi,
  address: todoAddress,
  eventName: 'NewTask',
})

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link todoAbi}__
 *
 *
 */
export const useReadTodo = /*#__PURE__*/ createUseReadContract({
  abi: todoAbi,
  address: todoAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link todoAbi}__ and `functionName` set to `"catCount"`
 *
 *
 */
export const useReadTodoCatCount = /*#__PURE__*/ createUseReadContract({
  abi: todoAbi,
  address: todoAddress,
  functionName: 'catCount',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link todoAbi}__ and `functionName` set to `"taskCategories"`
 *
 *
 */
export const useReadTodoTaskCategories = /*#__PURE__*/ createUseReadContract({
  abi: todoAbi,
  address: todoAddress,
  functionName: 'taskCategories',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link todoAbi}__
 *
 *
 */
export const useWriteTodo = /*#__PURE__*/ createUseWriteContract({
  abi: todoAbi,
  address: todoAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link todoAbi}__ and `functionName` set to `"createCategory"`
 *
 *
 */
export const useWriteTodoCreateCategory = /*#__PURE__*/ createUseWriteContract({
  abi: todoAbi,
  address: todoAddress,
  functionName: 'createCategory',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link todoAbi}__ and `functionName` set to `"createTask"`
 *
 *
 */
export const useWriteTodoCreateTask = /*#__PURE__*/ createUseWriteContract({
  abi: todoAbi,
  address: todoAddress,
  functionName: 'createTask',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link todoAbi}__
 *
 *
 */
export const useSimulateTodo = /*#__PURE__*/ createUseSimulateContract({
  abi: todoAbi,
  address: todoAddress,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link todoAbi}__ and `functionName` set to `"createCategory"`
 *
 *
 */
export const useSimulateTodoCreateCategory =
  /*#__PURE__*/ createUseSimulateContract({
    abi: todoAbi,
    address: todoAddress,
    functionName: 'createCategory',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link todoAbi}__ and `functionName` set to `"createTask"`
 *
 *
 */
export const useSimulateTodoCreateTask =
  /*#__PURE__*/ createUseSimulateContract({
    abi: todoAbi,
    address: todoAddress,
    functionName: 'createTask',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link todoAbi}__
 *
 *
 */
export const useWatchTodoEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: todoAbi,
  address: todoAddress,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link todoAbi}__ and `eventName` set to `"NewCategory"`
 *
 *
 */
export const useWatchTodoNewCategoryEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: todoAbi,
    address: todoAddress,
    eventName: 'NewCategory',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link todoAbi}__ and `eventName` set to `"NewTask"`
 *
 *
 */
export const useWatchTodoNewTaskEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: todoAbi,
    address: todoAddress,
    eventName: 'NewTask',
  })
