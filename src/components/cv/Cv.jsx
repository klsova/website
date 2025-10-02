import React, {useEffect, useState} from 'react'
import axios from 'axios'
import './Cv.css'

function Cv() {
    const [catUrl, setCatUrl] = useState('')

    useEffect(() => {
        const fetchCat = async () => {
            try {
                const response = await axios.get(
                    'https://api.thecatapi.com/v1/images/search',
                    {
                        headers: {
                            'x-api-key': import.meta.env.VITE_CAT_API_KEY
                        }
                    }
                );
                setCatUrl(response.data[0].url);
            } catch (error) {
                setCatUrl('');
            }
        };
        fetchCat();
    }, []);

    return (
        <div className='cv-container'>
            <a
            href="/Kalle Sova CV 2025 ENG.pdf"
            downlaod="Kalle_Sova_CV_2025_ENG.pdf"
            target="_blank"
            rel="noopener norefferer"
            className='cv-link'
            >
                Click here to view my CV
            </a>
            {catUrl && (
                <div className='cat-image-container'>
                    <h2>Here is a cute cat for you!</h2>
                    <img src={catUrl} alt="Random Cat" style={{ maxWidth: '600px', width: '100%' }} />
                </div>
            )}
        </div>
    );
}

export default Cv;