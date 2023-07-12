type Props = {
    label: string;
}

export const CustomButton = ({ label }: Props) => {
    return(
        <button className="p-3 text-white bg-blue-500 rounded-md font-bold">{label}</button>
    )
}