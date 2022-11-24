
import emailjs from '@emailjs/browser';
import LoadingBtn from '../ui/loadingBtn';
import { useRef, useState } from 'react';

const contactForm = () => {
    const [loading, setLoading] = useState(0)
    const form = useRef();


    function sendEmail(e) {
        setLoading(1)
        e.preventDefault(); 

        emailjs.sendForm(
            'service_spsbcgp',
             'template_ktv8frn', 
             form.current, 
             'KH6nFnzapB0ttHA0U')
        .then((result) => {
            setLoading(0)
            console.log(result.text);
        }, (error) => {
            setLoading(0)
            console.log(error.text);
        });

    }

    return (
        <form 
        id="contact-form"
        ref={form}
        action="" 
        method="post" 
        className="px-8 pt-16 md:p-16 flex flex-col"
        onSubmit={sendEmail}
        >
            <div className="field flex flex-col ">
                <label for="user_name" className="after:content-['*'] after:ml-1 after:text-red">name</label>
                <input 
                    type="text"
                    id="user_name" 
                    name="user_name" 
                    required
                  />

            </div>
            <div className="field flex flex-col">  
                <label for="user_email" className="after:content-['*'] after:ml-1 after:text-red">Email</label>
                <input 
                    type="email" 
                    id="user_email" 
                    name="user_email" 
                    required
                />
            </div>

            <div className="field flex flex-col">
                <label for="message">Tell me about your project</label>
                <textarea 
                    rows="4" 
                    type="text" 
                    id="message" 
                    name="message" 
                    required
                />
            </div>

            <button 
            type="submit" 
            className={`${loading ? 'shadow-none border-dashed translate-x-1' : 'shadow-custom'}
             text-2xl shadow-custom hover:shadow-none hover:translate-x-1 duration-150 h-[54px]`}
            disabled={loading ? true : false}>
                {loading ? <LoadingBtn /> : <span>Send</span>}
            </button>
        </form>
    )
}
export default contactForm;