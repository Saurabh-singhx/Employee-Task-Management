const employees = [
  {
    id: 1,
    name: "Rajesh",
    email: "employee1@example.com",
    password: "123",
    taskNumbers: {
      accepted: 2,
      newTask: 0,
      completed: 0,
      failed: 0,
    },
    tasks: [
      {
        accepted: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Prepare report",
        taskDescription: "Prepare the monthly sales report.",
        taskDate: "2024-12-28",
        category: "Sales",
      },
      {
        accepted: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Follow up with client",
        taskDescription: "Follow up with the client on project updates.",
        taskDate: "2024-12-29",
        category: "Sales",
      },
    ],
  },
  {
    id: 2,
    name: "Priya",
    email: "employee2@example.com",
    password: "123",
    taskNumbers: {
      accepted: 0,
      newTask: 0,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        accepted: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Client meeting",
        taskDescription: "Attend the meeting with the client.",
        taskDate: "2024-12-26",
        category: "Meetings",
      },
    ],
  },
  {
    id: 3,
    name: "Vikas",
    email: "employee3@example.com",
    password: "123",
    taskNumbers: {
      accepted: 0,
      newTask: 0,
      completed: 0,
      failed: 1,
    },
    tasks: [
      {
        accepted: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Update website",
        taskDescription: "Fix bugs on the company website.",
        taskDate: "2024-12-20",
        category: "IT",
      },
    ],
  },
  {
    id: 4,
    name: "Anjali",
    email: "employee4@example.com",
    password: "123",
    taskNumbers: {
      accepted: 2,
      newTask: 1,
      completed: 3,
      failed: 0,
    },
    tasks: [
      {
        accepted: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Inventory check",
        taskDescription: "Perform an inventory check for Q4.",
        taskDate: "2024-12-30",
        category: "Logistics",
      },
      {
        accepted: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Warehouse organization",
        taskDescription: "Organize the warehouse storage for next quarter.",
        taskDate: "2024-12-31",
        category: "Logistics",
      },
      {
        accepted: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Stock restocking",
        taskDescription: "Restock the inventory for the new year.",
        taskDate: "2024-12-25",
        category: "Logistics",
      },
      {
        accepted: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Order processing",
        taskDescription: "Process the customer orders from last week.",
        taskDate: "2024-12-22",
        category: "Logistics",
      },
      {
        accepted: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Shipping orders",
        taskDescription: "Ship all completed orders to customers.",
        taskDate: "2024-12-23",
        category: "Logistics",
      },
    ],
  },
  {
    id: 5,
    name: "Arjun",
    email: "employee5@example.com",
    password: "123",
    taskNumbers: {
      accepted: 1,
      newTask: 1,
      completed: 0,
      failed: 0,
    },
    tasks: [
      {
        accepted: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Employee training",
        taskDescription: "Organize training for new hires.",
        taskDate: "2024-12-31",
        category: "HR",
      },
    ],
  },
];


const admin = [
  {
    id: 101,
    name: "Suresh",
    email: "admin@example.com",
    password: "123",
  },
];


export const setLocalStorage = () => {
  // Check if localStorage already has the data
  if (!localStorage.getItem("employees")) {
    localStorage.setItem("employees", JSON.stringify(employees));
  }

  if (!localStorage.getItem("admin")) {
    localStorage.setItem("admin", JSON.stringify(admin));
  }
};

export const getLocalStorage = () => {
  try {
    const employeesData = JSON.parse(localStorage.getItem("employees")) || [];
    const adminData = JSON.parse(localStorage.getItem("admin")) || [];
    return [employeesData, adminData]; // Return as an array for consistent destructuring
  } catch (error) {
    console.error("Error reading from localStorage:", error);
    return [[], []]; // Return empty arrays in case of an error
  }
};
