import styled from "styled-components"
import { GrayBackdrop } from "../styles/Global"
import { ButtonSmall, Button } from "../styles/Global"
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ModalContainer = styled.div`
  min-height: 5rem;
  z-index: 99999;
  padding: 0;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  background-color: #fff;
  border-radius: 8px;
`

const ModalRow = styled.div`
    padding: 2rem;
`

const UpperModalRow = styled(ModalRow)`
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    display: flex;
    gap: 1rem;
    align-items: center;
    font-weight: 700;
    color: gray;
    font-size: ${({ theme }) => theme.fontSizes.header};
`

const MidModalRow = styled(ModalRow)`
    padding: 2rem 2rem 0 2rem;
    font-size: ${({ theme }) => theme.fontSizes.p}
`

const LowerModalRow = styled(ModalRow)`
    display: flex;
    gap: 10px;
    padding: 2rem; 
`

const DialogBox = ({ isAlert, headerText, agreeButton, children }: { isAlert: boolean, headerText: string, agreeButton: string, children: any }) => {
    document.querySelector('body')!.style.overflow = 'hidden'

    return (
        <>
            <GrayBackdrop />
            <ModalContainer>
                <UpperModalRow>
                    <FontAwesomeIcon icon={faCircleExclamation} />
                    {headerText}
                </UpperModalRow>
                <MidModalRow>
                    {children}
                </MidModalRow>
                <LowerModalRow>
                    {isAlert ? <Button> {agreeButton} </Button> :
                        <>
                            <ButtonSmall>{agreeButton}</ButtonSmall>
                            <ButtonSmall>Cancel</ButtonSmall>
                        </>
                    }
                </LowerModalRow>
            </ModalContainer>
        </>
    )
}

export default DialogBox