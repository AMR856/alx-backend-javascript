export default function createReportObject(employeesList) {
  const myObject = {
    allEmployees: {
      ...employeesList,
    },
    getNumberOfDepartments: (employeesList) => (Object.keys(employeesList)).length,
  };
  return myObject;
}
