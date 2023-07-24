import { useState } from "react";
import "./App.css";

function App() {
  const [hex, setHex] = useState("#ffffff");

  function randomHex() {
    const randomhex = "#" + Math.floor(Math.random() * 16777721).toString(16);
    setHex(randomhex);
  }

  //     Bu JavaScript kodu, rastgele bir hex renk kodu oluşturan bir fonksiyon içeriyor. Kodu adım adım açıklayalım:

  // Math.random() fonksiyonu, 0 (dahil) ile 1 (hariç) arasında rastgele bir ondalıklı sayı döndürür.

  // Math.random() * 16777721 ifadesi, 0 (dahil) ile 16777721 (hariç) arasında rastgele bir ondalıklı sayı oluşturur. Bu sayı 16777721, 16'lık bir sayı sisteminde en büyük altı haneli sayı olan FFFFFF'e karşılık gelir, yani en yüksek hex renk kodu değerini temsil eder (#FFFFFF).

  // Math.floor() fonksiyonu, ondalıklı sayıyı tam sayıya yuvarlar. Böylece, 0 ile 16777720 (dahil) arasında rastgele bir tamsayı elde ederiz.

  // .toString(16) ifadesi, elde edilen tamsayıyı 16'lık bir sayı sisteminde (hexadecimal) bir dizeye dönüştürür. Yani, rastgele bir hex renk kodunun altı haneli dizesini elde ederiz.

  // "#" + ... ifadesi, rastgele oluşturulan hex renk kodu dizesini "#" işareti ile birleştirir ve sonuç olarak rastgele bir hex renk kodu elde ederiz.

  // Sonuç olarak, randomhex değişkeni, "#000000" ile "#FFFFFF" arasında rastgele bir hex renk kodu içeren bir dizedir. Örnek olarak, "#3A5BC2" veya "#FF9900" gibi rastgele hex renk kodları üretebilir. Bu kod, dinamik olarak rastgele renkler oluşturmak için kullanılabilir, örneğin web sayfalarında veya uygulamalarda farklı renklere sahip arayüzler tasarlamak için kullanılabilir.

  return (
    <div className="App" style={{ backgroundColor: `${hex}` }}>
      <h1>{hex}</h1>
      <button onClick={randomHex}>click for new background</button>
      <button onClick={() => navigator.clipboard.writeText(hex)}>
        Copy the hex Value
      </button>

      <h4>
        <a href="https://github.com/achieve-software" target="_blank">
          Visit my Github Profile
        </a>
      </h4>
    </div>
  );
}

export default App;
