import IconProperties from "../../ts/IconProperties.ts";

export default function NotificationIcon(props: IconProperties)
{
    return (
        <svg width={props.size ?? "16"} height={props.size ?? "20"} viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M7.58648 19.5C8.68648 19.5 9.58648 18.6 9.58648 17.5H5.58648C5.58648 18.6 6.47648 19.5 7.58648 19.5ZM13.5865 13.5V8.5C13.5865 5.43 11.9465 2.86 9.08648 2.18V1.5C9.08648 0.67 8.41648 0 7.58648 0C6.75648 0 6.08648 0.67 6.08648 1.5V2.18C3.21648 2.86 1.58648 5.42 1.58648 8.5V13.5L0.296477 14.79C-0.333523 15.42 0.106477 16.5 0.996477 16.5H14.1665C15.0565 16.5 15.5065 15.42 14.8765 14.79L13.5865 13.5Z"
                fill={props.fill ?? "#BDC2C2"}
            />
        </svg>
    );
}