import rewire from "rewire"
const DockerController = rewire("../DockerController")
const titleCase = DockerController.__get__("titleCase")
// @ponicode
describe("titleCase", () => {
    test("0", () => {
        let result: any = titleCase("This is a Text")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = titleCase("foo bar")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = titleCase("Foo bar")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = titleCase("Hello, world!")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = titleCase("")
        expect(result).toMatchSnapshot()
    })
})
