import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import html2PDF from 'jspdf-html2canvas';
import { useSelector } from 'react-redux';

import PrintDisplay from '../components/cocktails/print';

const PrintPage = () => {

    const menu = useSelector((state) => state.menu.cocktail);

    const doPDF = () => {
        // use ref here

        // const HTML_Height = input.offsetHeight;
        // const HTML_Width = input.offsetWidth;
        // html2canvas(input, { allowTaint: true })
        //     .then((canvas) => {
        //         const imgData = canvas.toDataURL('image/png');
        //         const pdf = new jsPDF({ format: 'a4' });

        //         console.log("html height is ", HTML_Height);

        //         pdf.addImage(imgData, 'JPEG', 0, 0);
        //         pdf.save("menu.pdf");
        //     });

        const pages = document.getElementsByClassName('print');

        html2PDF(pages, {
            jsPDF: {
                format: 'a4',
            },
            imageType: 'image/jpeg',
            output: 'test.pdf'
        });


    }

    return (
        <>
            <div className="print__message">
                <h2>Your menu is ready</h2>
                <p>Hi, we've processed your menu and it's ready for you to save!</p>
                <button className="button" onClick={doPDF}>Download Your Menu</button>
            </div>
            <div style={{ opacity: 0 }}>
                {menu.length !== 0 ?
                    Object.keys(menu).map((key, index) => {
                        if (menu[key].title !== undefined) {
                            return (
                                <>
                                    <PrintDisplay data={menu[key]} key={uuidv4()} id={uuidv4()} />
                                </>
                            )
                        }
                    })
                    :
                    <div className="menu__empty">
                        <h2>Oops! Your menu is empty!</h2>
                    </div>}
            </div>
        </>
    )

}

export default PrintPage;