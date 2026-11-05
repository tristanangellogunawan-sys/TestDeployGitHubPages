import { useState } from 'react';

function InputTek() {
    const [teks , setTeks] = useState(' Silahkan Input Teks Disini');

    return(
        <div>
            <h2>Input Data</h2>
            <div>
                <input
                type="text"
                value={teks}
                onChange={(e) => setTeks(e.target.value)}
                placeholder="Ketik sesuatu di sini..."
                />
                <p>Hasil Inputan: {teks}</p>
            </div>
        </div>
    );
    
}
export default InputTek;