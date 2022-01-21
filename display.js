class Display{
    constructor(displayValueBefore, displayValueAfter){
        this.displayValueAfter = displayValueAfter
        this.displayValueBefore = displayValueBefore
        this.calculator = new calculat()
        this.typeOperation = undefined
        this.valueAfter = ""
        this. valueBefore = ""
        this.signs ={
            sum: "+",
            divi: "%",
            multy: "x",
            rest: "-"
        } 
    }
    deteleValue(){
        this.valueAfter = this.valueAfter.toString().slice(0,-1)
        this.printValue()
    }
    deteleAll(){
        this.valueAfter = ""
        this.valueBefore = ""
        this.typeOperation = undefined
        this.printValue()
    }
    comput(type){
        this.typeOperation !== "equal" && this.calculate()
        this.typeOperation = type
        this.valueBefore = this.valueAfter || this.valueBefore
        this.valueAfter = ""
        this.printValue()
    }
        addNumber(number){
        if (number === "." && this.valueAfter.includes(".")) return
        this.valueAfter = this.valueAfter.toString() + number.toString()
        this.printValue()
    }

    printValue() {
        this.displayValueAfter.textContent = this.valueAfter
        this.displayValueBefore.textContent = `${this.valueBefore} ${this.signs[this.typeOperation] || ""}`
    }
    calculate(){
        const valueBefore = this.valueBefore = parseFloat(this.valueBefore)
        const valueAfter = this.valueAfter = parseFloat(this.valueAfter)

        if(isNaN(valueAfter) || isNaN(valueBefore) ) return
        this.valueAfter = this.calculator[this.typeOperation](valueBefore, valueAfter)
    }
  

}

   