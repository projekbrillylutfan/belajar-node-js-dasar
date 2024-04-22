test('string', () => { 
    const name = "Brilly Lutfan Qasthari"

    expect(name).toBe("Brilly Lutfan Qasthari");
    expect(name).toEqual("Brilly Lutfan Qasthari");
    expect(name).toMatch(/illy/);
 })