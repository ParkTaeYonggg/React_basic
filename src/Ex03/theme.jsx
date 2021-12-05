import React from "react";

export const device_size = {
    mobile: "425px",
    tablet: "768px",
    desktop: "1440px"
}
const Device = {
    mobile: `@media screen and (max-width: ${device_size.mobile})`,
    tablet: `@media screen and (max-width: ${device_size.tablet})`,
    desktop: `@media screen and (max-width: ${device_size.desktop})`
}

export default Device;