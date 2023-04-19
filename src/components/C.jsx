import Card from "./Card";

//color 배열 생성
const colors = [
    "bg-red-200",
    "bg-red-300",
    "bg-red-400",
    "bg-red-500",
    "bg-pink-400",
    "bg-pink-300",
    "bg-pink-200",
];

function C() {
    return (
        <div className="flex justify-center items-center h-screen">
            {/* map함수를 돌면서 color에 각각 할당 */}
            {colors.map((color, index) => (
                <Card key={index} color={color} />
            ))}
        </div>
    );
}

export default C;
