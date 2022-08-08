import actions from "../../actions";

class menu extends actions {

    public get Accessibility () {
        return $('~Accessibility');
    }

    public async AccessibilityTest () {
        await this.click(this.Accessibility)
    }
}

export default new menu();
