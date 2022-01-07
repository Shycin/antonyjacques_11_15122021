export default function RenderArrayInString({ array }) {
    return <ul>
        {array.map((item, i) => <li key={i}>{item}</li>)}
    </ul>
}