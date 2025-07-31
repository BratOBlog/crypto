import { Link } from 'react-router'


const NotFoundPage = () => {
    return (
        <div className='container'>
            <h1>404
            </h1>
            <p className="text-lg font-semibold">
                PAGE NOT FOUND


            </p>
            <span>Back to <Link to="/">Home</Link></span>


        </div>
    );
}

const styles = {
    container: {
        textAlign: 'center',
        padding: '80px 20px',
        color: '#fff',
        margin: '20px auto'
    }
}


export default NotFoundPage;