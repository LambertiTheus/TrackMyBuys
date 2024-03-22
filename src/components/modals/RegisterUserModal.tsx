import React, { useState } from 'react'
import { PrismaClient } from "@prisma/client"
import ModalComponent from "~/components/shared/ModalComponent"
import ButtonComponent from '../shared/ButtonComponent'
import { api } from "~/utils/api"
import InputTextComponent from '../shared/InputTextComponent'


interface UserRegistrationModalProps {
    isOpen: boolean
    onClose: () => void
}

const UserRegistrationModal: React.FC<UserRegistrationModalProps> = ({
    onClose
}) => {
    const { data, isLoading } = api.user.userInfo.useQuery()
    const userExists = data !== undefined
    const [nickname, setNickname] = useState('')


    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNickname(e.target.value)
    }

    const handleSubmit =  (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        try {
            api.user.createUser.useMutation()
            onClose()
        } catch (error) {
            console.error("nickname ja existe")
        }
    }

    return (
        <ModalComponent
            title="Register User"
            modalOpen={!userExists}
            setModalOpen={() => ''}
            openButtonTitle="Register User"
            removeCloseButton
        >
            <form onSubmit={handleSubmit}>
                <InputTextComponent placeholder={'NickName'}>
                    <div>
                        NickName
                    </div>
                </InputTextComponent>
                <ButtonComponent
                    isLoading={isLoading}
                >
                    <div>
                        Register
                    </div>
                </ButtonComponent>
            </form>
        </ModalComponent>
    )
}

export default UserRegistrationModal 
