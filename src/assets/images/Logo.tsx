export interface LogoProps
{
    className?: string;
    width?: number;
    height?: number;
    fill?: string;
}

export default function Logo(props: LogoProps)
{
    return (
        <svg width={props.width ?? "170"} height={props.height ?? "22"} viewBox="0 0 170 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M139.235 20.9023C134.055 20.9023 131.087 17.8503 131.087 13.2583C131.087 8.72227 133.971 5.44627 139.263 5.44627C143.939 5.44627 146.571 8.02227 146.571 12.0543H141.727C141.531 10.6263 140.523 9.98227 139.067 9.98227C137.443 9.98227 136.547 10.9063 136.463 12.8103C137.219 11.9143 138.255 11.7183 139.067 11.7183C139.767 11.7183 140.327 11.8583 140.803 12.1103V14.7423C139.991 14.3783 139.263 14.2103 138.563 14.2103C137.527 14.2103 137.023 14.5743 137.023 14.9943C137.023 15.6383 138.059 16.2543 139.935 16.2543C141.559 16.2543 143.015 15.8063 145.115 14.5463V19.3343C143.995 20.0623 141.951 20.9023 139.235 20.9023Z"
                fill={props.fill ?? "white"}/>
            <path
                d="M124.185 20.9303C120.321 20.9303 117.689 19.0823 117.689 15.7223H122.701C122.729 16.8143 123.317 17.4023 124.297 17.4023C125.081 17.4023 125.473 17.0383 125.473 16.5903C125.473 14.6023 117.857 15.3023 117.857 10.2343C117.857 7.49027 120.069 5.41827 124.213 5.41827C128.105 5.41827 130.373 7.23827 130.373 10.4023H125.585C125.585 9.50626 125.109 8.83427 124.185 8.83427C123.485 8.83427 123.121 9.22627 123.121 9.64627C123.121 11.5223 130.513 10.7383 130.513 16.0303C130.513 19.0263 128.133 20.9303 124.185 20.9303Z"
                fill={props.fill ?? "white"}/>
            <path d="M116.146 5.75427V20.5943H110.686V17.2623C110.07 19.3343 108.782 20.9303 106.29 20.9303C103.406 20.9303 101.978 18.9143 101.978 15.9463V5.75427H107.438V14.0143C107.438 15.2743 107.886 16.1423 108.922 16.1423C110.154 16.1423 110.686 14.9663 110.686 13.2303V5.75427H116.146Z" fill={props.fill ?? "white"}/>
            <path d="M92.7761 20.9303C88.1561 20.9303 84.6841 17.5983 84.6841 13.2023C84.6841 8.80627 88.1561 5.47427 92.7761 5.47427C97.3961 5.47427 100.868 8.80627 100.868 13.2023C100.868 17.5983 97.3961 20.9303 92.7761 20.9303ZM90.2281 13.2023C90.2281 14.9943 91.2081 16.1143 92.7761 16.1143C94.3441 16.1143 95.3241 14.9943 95.3241 13.2023C95.3241 11.4103 94.3441 10.2903 92.7761 10.2903C91.2081 10.2903 90.2281 11.4103 90.2281 13.2023Z" fill={props.fill ?? "white"}/>
            <path d="M69.1699 20.5943V0.994268H74.6299V9.11427C75.2739 7.04227 76.6459 5.41827 79.2499 5.41827C82.1339 5.41827 83.5619 7.43427 83.5619 10.4023V20.5943H78.1019V12.3343C78.1019 11.1583 77.7379 10.2063 76.5619 10.2063C75.2739 10.2063 74.6299 11.3543 74.6299 13.1183V20.5943H69.1699Z" fill={props.fill ?? "white"}/>
            <path
                d="M60.7312 20.9023C55.5512 20.9023 52.5832 17.8503 52.5832 13.2583C52.5832 8.72227 55.4672 5.44627 60.7592 5.44627C65.4352 5.44627 68.0672 8.02227 68.0672 12.0543H63.2232C63.0272 10.6263 62.0192 9.98227 60.5632 9.98227C58.9392 9.98227 58.0432 10.9063 57.9592 12.8103C58.7152 11.9143 59.7512 11.7183 60.5632 11.7183C61.2632 11.7183 61.8232 11.8583 62.2992 12.1103V14.7423C61.4872 14.3783 60.7592 14.2103 60.0592 14.2103C59.0232 14.2103 58.5192 14.5743 58.5192 14.9943C58.5192 15.6383 59.5552 16.2543 61.4312 16.2543C63.0552 16.2543 64.5112 15.8063 66.6112 14.5463V19.3343C65.4912 20.0623 63.4472 20.9023 60.7312 20.9023Z"
                fill={props.fill ?? "white"}/>
            <path d="M42.2363 20.5943V5.75427H47.6963V10.3183C48.2563 7.09827 49.6003 5.16627 51.9803 5.55827V11.4103C49.7963 10.7663 47.6963 12.0823 47.6963 15.1063V20.5943H42.2363Z" fill={props.fill ?? "white"}/>
            <path
                d="M35.6812 20.5943L35.2332 18.5223C34.4772 19.9503 33.0772 20.8463 31.1452 20.8463C28.5412 20.8463 26.4972 19.2503 26.4972 16.3943C26.4972 13.5663 28.5412 12.1103 31.4532 12.1103C33.0772 12.1103 34.2812 12.5583 35.0092 13.4543V11.5223C35.0092 10.5983 34.5892 9.98227 33.1612 9.98227C31.9012 9.98227 31.4252 10.4863 31.2852 11.2703H26.8332C26.8612 7.77027 29.0172 5.47427 33.6652 5.47427C38.1732 5.47427 40.4692 7.68627 40.4692 11.5783V20.5943H35.6812ZM32.0412 16.0583C32.0412 16.7863 32.5172 17.2063 33.4692 17.2063C34.5052 17.2063 35.0092 16.7303 35.0092 15.9463C35.0092 15.2463 34.5612 14.8823 33.5812 14.8823C32.5452 14.8823 32.0412 15.3023 32.0412 16.0583Z"
                fill={props.fill ?? "white"}/>
            <path d="M4.64193 20.5943L0.273926 0.994268H6.23793L8.36593 14.0983L10.8859 0.994268H16.1779L18.7819 14.0983L20.8259 0.994268H26.7899L22.5619 20.5943H15.6739L13.4619 10.1503L11.2499 20.5943H4.64193Z" fill={props.fill ?? "white"}/>
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M151.077 7.14114C151.077 6.35615 151.704 5.71927 152.477 5.71927H161.811C162.583 5.71927 163.211 6.35615 163.211 7.14114V8.56302H164.689C165.185 8.56302 165.661 8.76148 166.011 9.11694L168.265 11.4068C168.615 11.7622 168.811 12.2451 168.811 12.7487V16.1464C169.327 16.1464 169.744 16.57 169.744 17.0943C169.744 17.6186 169.327 18.0422 168.811 18.0422H167.877C167.877 19.6122 166.623 20.8859 165.077 20.8859C163.531 20.8859 162.277 19.6122 162.277 18.0422H158.544C158.544 19.6122 157.29 20.8859 155.744 20.8859C154.198 20.8859 152.944 19.6122 152.944 18.0422H152.477C151.704 18.0422 151.077 17.4053 151.077 16.6203V13.3026H159.244C159.566 13.3026 159.827 13.0414 159.827 12.7193C159.827 12.3971 159.566 12.1359 159.244 12.1359H151.077V10.9693H160.411C160.733 10.9693 160.994 10.7081 160.994 10.3859C160.994 10.0638 160.733 9.8026 160.411 9.8026H151.077V8.63594H159.244C159.566 8.63594 159.827 8.37478 159.827 8.0526C159.827 7.73042 159.566 7.46927 159.244 7.46927H151.077V7.14114ZM164.689 10.4589H163.211V13.3026H166.944V12.7487L164.689 10.4589ZM154.754 17.0368C154.491 17.3034 154.344 17.6651 154.344 18.0422C154.344 18.4193 154.491 18.781 154.754 19.0476C155.017 19.3142 155.373 19.4641 155.744 19.4641C156.115 19.4641 156.471 19.3142 156.734 19.0476C156.996 18.781 157.144 18.4193 157.144 18.0422C157.144 17.6651 156.996 17.3034 156.734 17.0368C156.471 16.7701 156.115 16.6203 155.744 16.6203C155.373 16.6203 155.017 16.7701 154.754 17.0368ZM166.067 17.0368C165.805 16.7701 165.449 16.6203 165.077 16.6203C164.706 16.6203 164.35 16.7701 164.087 17.0368C163.825 17.3034 163.677 17.6651 163.677 18.0422C163.677 18.4193 163.825 18.781 164.087 19.0476C164.35 19.3142 164.706 19.4641 165.077 19.4641C165.449 19.4641 165.805 19.3142 166.067 19.0476C166.33 18.781 166.477 18.4193 166.477 18.0422C166.477 17.6651 166.33 17.3034 166.067 17.0368Z"
                  fill={props.fill ?? "white"}/>
            <path d="M151.077 12.1359V13.3026H146.994C146.672 13.3026 146.411 13.0414 146.411 12.7193C146.411 12.3971 146.672 12.1359 146.994 12.1359H151.077Z" fill={props.fill ?? "white"}/>
            <path d="M151.077 9.8026V10.9693H148.161C147.838 10.9693 147.577 10.7081 147.577 10.3859C147.577 10.0638 147.838 9.8026 148.161 9.8026H151.077Z" fill={props.fill ?? "white"}/>
            <path d="M151.077 7.46927V8.63594H146.994C146.672 8.63594 146.411 8.37478 146.411 8.0526C146.411 7.73042 146.672 7.46927 146.994 7.46927H151.077Z" style={{fill: props.fill ?? "white"}}/>
        </svg>
    );
}