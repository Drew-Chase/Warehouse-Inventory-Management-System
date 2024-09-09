interface ContactFormIconIconProperties
{
    width?: number | string;
    height?: number | string;
    size?: number | string;
    fill?: string;
}

export default function ContactFormIcon(props: ContactFormIconIconProperties)
{
    return (
        <svg
            width={props.size || props.width || "18"}
            height={props.size || props.height || "21"}
            viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg"
        >
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M2 0.5H13L18 6.05556V18.2778C18 19.5 17.1 20.5 16 20.5H2C0.9 20.5 0 19.5 0 18.2778V2.72222C0 1.5 0.9 0.5 2 0.5ZM12 2.72222V6.05556C12 6.66667 12.45 7.16667 13 7.16667H16L12 2.72222ZM5 8C5 7.44772 5.39797 7 5.88889 7H7.34633C7.53763 7 7.70747 7.13771 7.76797 7.34189L8.43366 9.58861C8.5036 9.82466 8.40861 10.0827 8.21079 10.1939L7.20756 10.7582C7.69744 11.9806 8.57279 12.9654 9.65934 13.5165L10.1609 12.3879C10.2599 12.1653 10.4892 12.0584 10.699 12.1371L12.6961 12.886C12.8776 12.9541 13 13.1452 13 13.3604V15C13 15.5523 12.602 16 12.1111 16H11.6667C7.98477 16 5 12.6421 5 8.5V8Z"
                  fill={props.fill || "white"}/>
        </svg>
    );
}