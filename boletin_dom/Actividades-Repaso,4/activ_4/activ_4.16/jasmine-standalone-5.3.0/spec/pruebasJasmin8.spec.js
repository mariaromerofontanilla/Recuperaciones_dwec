describe("Prueba de la función tamaño()", function () {
    let select, p1, p2;
  
    beforeEach(function () {
        // Crear elementos de prueba
        select = document.createElement("select");
        select.id = "opciones";
        document.body.appendChild(select);
  
        p1 = document.createElement("p");
        p2 = document.createElement("p");
        document.body.appendChild(p1);
        document.body.appendChild(p2);
    });
  
    afterEach(function () {
        document.body.innerHTML = ""; // Limpiar después de cada prueba
    });
  
    it("debe cambiar el tamaño de fuente a 12px si la opción es 1", function () {
        select.value = "1";
        tamaño();
        expect(p1.style.fontSize).toBe("12px");
        expect(p2.style.fontSize).toBe("12px");
    });
  
    it("debe cambiar el tamaño de fuente a 16px si la opción es 2", function () {
        select.value = "2";
        tamaño();
        expect(p1.style.fontSize).toBe("16px");
        expect(p2.style.fontSize).toBe("16px");
    });
  
    it("debe cambiar el tamaño de fuente a 20px si la opción es 3", function () {
        select.value = "3";
        tamaño();
        expect(p1.style.fontSize).toBe("20px");
        expect(p2.style.fontSize).toBe("20px");
    });
  });
  