import { PositiveArray } from "./PositiveArray";

let Array : PositiveArray; 

describe('testing array', () => {
    beforeAll(() => {
        Array = new PositiveArray();
    });
    it('should add positive', () => {
        const numb =450;
        Array.add(numb);
        let i = Array.values[0];
        expect(i).toBe(numb);
    });
    it("should remmove number", () => {
        const numb = 50;
        Array.add(numb);
        Array.remove(numb);
        expect(Array.length).toBe(2);
    });
    it("should add two numbers and remove one", () => {
        Array.add(1);
        Array.add(5);
        Array.remove(1);
        expect(Array.length).toBe(3);
    });
});