import clsx from "clsx";
import React from 'react';

export type FaqHeadingProps = {
    className?: string;
    style?: React.CSSProperties;
};

export const FaqHeading: React.FC<FaqHeadingProps> = ({className,style}) => {

    return (
        <svg className={clsx('', className)} viewBox="0 0 1042.817 601.175" style={style}>
            <title>Faq - Häufig gestellte Fragen</title>
            <path
                  d="M137.08-290.888h-91.1v277.58h-30.6v-432.74H123.557v6.406H45.977v142.349h91.1ZM403.272-13.308H371.956L345.621-163.486H270.888L244.554-13.308h-6.406l83.274-467.616ZM344.909-169.892,308.61-376.3l-36.3,206.406ZM1055.941,56.443a56.843,56.843,0,0,1-14.235,43.772q-16.37,18.861-44.84,18.861Q879.429,119.076,818.219-19a214.249,214.249,0,0,1-77.58,14.235q-93.95,0-161.21-64.413t-67.26-156.228q0-93.238,64.413-160.854t156.939-67.616q93.239,0,160.5,64.413t67.26,156.228q0,64.057-32.028,118.149T844.553-31.1q69.039,138.79,159.431,138.79,17.794,0,33.1-15.3t13.167-35.943a49.173,49.173,0,0,0-17.794-33.808Q1016.8,9.467,994.731,9.467V3.062q24.2,0,41.637,14.947T1055.941,56.443ZM932.1-233.237q0-89.68-58.719-152.669T733.521-447.472q-79.715,1.424-135.587,66.192T542.062-225.408q0,88.968,58.363,151.6t139.5,62.633a170.5,170.5,0,0,0,73.31-16.37q-34.164-67.616-93.95-67.616-51.957,0-85.409,21.352l-4.27-6.406q39.146-25.623,87.544-25.623,76.868,0,121,64.057,42.7-29.893,68.327-81.139T932.1-233.237Z"
                  transform="translate(-14.372 481.099)" fill="none" stroke="currentColor" strokeWidth="2"/>
        </svg>


    );
};

