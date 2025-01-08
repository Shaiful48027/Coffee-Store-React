import main_logo from '../../assets/images/cups/main_logo.png';


const Header = () => {
    return (
        <section className=" bg-black bg-[url('../../assets/images/more/15.jpg')] w-full h-[120px] flex justify-center items-center">
            <img src={main_logo} alt="" />
        </section>
    );
};

export default Header;