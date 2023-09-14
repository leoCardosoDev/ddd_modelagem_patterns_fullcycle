import Address from "./address";
import CustomerUnitTest from "./customer";

describe("Customer Unit test", () => {

  it("Should throw error when ID is empty", () => {
    expect(()=> {
      const customer = new CustomerUnitTest("", "Leo");
    }).toThrowError("ID is required!");
  });

  it("Should throw error when Name is empty", () => {
    expect(()=> {
      const customer = new CustomerUnitTest("1", "");
    }).toThrowError("Name is required!");
  });

  it("Should change Name", () => {
    const customer = new CustomerUnitTest("123", "John");
    customer.changeName("Jane");
    expect(customer.name).toBe("Jane");
  });

  it("Should throw error if address is undefined when you activate a customer", () => {
    expect(() => {
      const customer = new CustomerUnitTest("1", "Customer1");
      customer.activate();
    }).toThrowError("Address is mandatory to activate as customer");
  });

  it("Should activate customer", () => {
    const customer = new CustomerUnitTest("1", "Customer1");
    const address = new Address("Street 1",123, "12345-678", "Barueri");
    customer.Address = address;
    customer.activate();
    expect(customer.isActive()).toBe(true);
  });

  it("Should deactivate customer", () => {
    const customer = new CustomerUnitTest("1", "Customer1");
    customer.deactivate();
    expect(customer.isActive()).toBe(false);
  });

});
