import BataBitImg from '@images/batabit.png';
import DollaImg from '@images/dolla.png';
import HuluImg from '@images/hulu.png';
import BooksImg from '@images/books.png';
import MessengerImg from '@images/messenger.png';
import pythonWebImg from '@images/pythonWeb.png';
import todoImg from '@images/to-do.png';
import ShoppingCartImg from '@images/shopping-cart.png';
export const dataProjects: {
    title: string,
    usedTech: string,
    urlImage: any,
    // colors: string[],
}[] = [
        {
            title: "Batabit",
            usedTech: "HTML, CSS, JavaScript",
            urlImage: BataBitImg,
            // colors: ["#f8f9fa", "#6c757d"]
        },
        {
            title: "Dolla",
            usedTech: "React, styled-components",
            urlImage: DollaImg,
        },
        {
            title: "Open Library",
            usedTech: "React, TailwindCSS",
            urlImage: BooksImg,
        },
        {
            title: "Hulu",
            usedTech: "Next, TailwindCSS",
            urlImage: HuluImg,
        },
        {
            title: "User Register",
            usedTech: "Python, MongoDB",
            urlImage: pythonWebImg,
        },
        {
            title: "Messenger",
            usedTech: "React, Firebase",
            urlImage: MessengerImg,
        },
        {
            title: "To-do",
            usedTech: "React, TailwindCSS",
            urlImage: todoImg,
        },
        {
            title: "ShoppingCart",
            usedTech: "React, TailwindCSS",
            urlImage: ShoppingCartImg,
        }
    ];