import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';

const NoImageCard = () => {
    return (<div
        className={'w-[350px]  h-[300px] rounded-[20px] card-shadow-primary-purple text-white p-[20px] flex flex-col gap-[20px] justify-center'}>
        <SettingsSuggestIcon className={'text-6xl'}/>
        <h3 className={'text-2xl'}> Custom Solutions</h3>
        <p className={'text-gray-400'}>Our team of experienced developers can create custom software solutions tailored
            to your specific requirements.</p>
    </div>);
}

export default NoImageCard;