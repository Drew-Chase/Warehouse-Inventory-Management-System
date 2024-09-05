interface AccordionViewIconProperties
{
    width?: number | string;
    height?: number | string;
    size?: number | string;
    fill?: string;
}

export default function AccordionViewIcon(props: AccordionViewIconProperties)
{
    return (
        <svg width={props.width || "17"} height={props.height || "12"} viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.518433 1.20428C0.518433 0.992388 0.690202 0.820618 0.902091 0.820618H15.8648C16.0767 0.820618 16.2484 0.992387 16.2484 1.20428V7.34281C16.2484 7.5547 16.0767 7.72647 15.8648 7.72647H0.902091C0.690202 7.72647 0.518433 7.5547 0.518433 7.34281V1.20428Z" fill={props.fill || "#BDC2C2"}/>
            <path d="M0.518433 8.87745C0.518433 8.66556 0.690202 8.49379 0.902091 8.49379H15.8648C16.0767 8.49379 16.2484 8.66556 16.2484 8.87745V10.7957C16.2484 11.0076 16.0767 11.1794 15.8648 11.1794H0.902091C0.690202 11.1794 0.518433 11.0076 0.518433 10.7957V8.87745Z" fill={props.fill || "#BDC2C2"}/>
        </svg>
    );
}