import { UserButton } from "@clerk/nextjs";

function Header() {
    return (
        <div className="z-30 fixed w-full py-2 bg-darkgrey border-b">
            <div className="w-10/12 mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <UserButton />
                    <div style={{ marginLeft: '0.5rem' }}>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default Header