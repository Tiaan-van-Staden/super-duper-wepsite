type DBItemProps = {
    id: string
    title: string
    complete: Boolean
}

export function DBItem({ id, title, complete }: DBItemProps) {
    return (
        <li className="flex gap-1 items-center">
            <label>
                {title}
            </label>
        </li>
    )
}