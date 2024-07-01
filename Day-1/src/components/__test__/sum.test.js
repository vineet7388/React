import { sum } from "../Sum"
test("sum function should cal sum of two function",()=>{
    const result = sum(3,4)
    expect(result).toBe(7)
})