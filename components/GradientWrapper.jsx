const GradientWrapper = ({ children, ...props }) => (
    <div
        {...props}
        className={`relative ${props.className || ""}`}>
        <div className={`absolute m-auto blur-[160px] ${props.wrapperClassName || ""}`}
            style={{
                background:
                    `linear-gradient(180deg, ${props.hex} 0%, ${props.rgba} 0.01%, ${props.rgba} 1%)`,
            }}>

        </div>
        <div className="relative">
            {children}
        </div>
    </div>
)

export default GradientWrapper