interface PackagingIconIconProperties
{
    width?: number | string;
    height?: number | string;
    size?: number | string;
    fill?: string;
}

export default function PackagingIcon(props: PackagingIconIconProperties)
{
    return (
        <svg width={props.size || props.width || "19"} height={props.size || props.height || "17"} viewBox="0 0 19 17" fill={"none"} xmlns="http://www.w3.org/2000/svg" style={{minWidth: props.size || props.width || "10px", maxWidth: props.size || props.width || "100px", minHeight: props.size || props.height, maxHeight: props.size || props.height}}>
            <path
                d="M0.19165 1.8C0.19165 1.24688 0.638525 0.800003 1.19165 0.800003H3.46978C4.32915 0.800003 5.09478 1.35 5.36665 2.16875L8.24478 10.8C9.1854 10.8156 10.0198 11.2656 10.5573 11.9563L16.8729 9.85C17.3979 9.675 17.9635 9.95938 18.1385 10.4813C18.3135 11.0031 18.0292 11.5719 17.5073 11.7469L11.1917 13.8531C11.1635 15.4844 9.83228 16.8 8.19165 16.8C6.5354 16.8 5.19165 15.4563 5.19165 13.8C5.19165 12.8375 5.64478 11.9813 6.3479 11.4313L3.46978 2.8H1.19165C0.638525 2.8 0.19165 2.35313 0.19165 1.8ZM7.84165 5.00313C7.66978 4.47813 7.95727 3.9125 8.48228 3.74375L9.9104 3.28125L10.5292 5.18438L12.4323 4.56563L11.8104 2.6625L13.2385 2.2C13.7635 2.02813 14.3292 2.31563 14.4979 2.84063L16.0417 7.59688C16.2135 8.12188 15.926 8.6875 15.401 8.85625L10.6448 10.4C10.1198 10.5719 9.55415 10.2844 9.3854 9.75938L7.84165 5.00313Z"
                fill={props.fill || "#AFB6B6"}/>
        </svg>

    );
}