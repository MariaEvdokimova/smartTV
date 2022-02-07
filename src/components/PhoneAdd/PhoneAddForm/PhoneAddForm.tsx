import React, {useEffect, useRef, useState} from "react";
import InputMask from "react-input-mask";
import {Field, Form, Formik} from "formik";
import style from './PhoneAddForm.module.css';
import addNumberText from "../../../assets/img/addNumberText.png";
import signText from "../../../assets/img/signText.png";
import checkboxText from "../../../assets/img/checkboxText.png";
import { useNavigate } from "react-router-dom";

export const PhoneAddForm: React.FC = () => {
    const [phoneNum, EditPhoneNum] = useState<string>('');
    const navigate = useNavigate();
    const keyboardRef = useRef<any>(null);
    const buttonRef =  useRef<any>(null);
    const outRef =  useRef<any>(null);
    const focusElement = useRef<number>(0);
    const keysButtons = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'Backspace', '0'];

    const submit = (values: any, { setSubmitting }: {setSubmitting: (isSubmitting: boolean) => void }) => {
        navigate('/final');
        setSubmitting(false);
    }

    const CustomInput = (props: any) => (
        <InputMask {...props}>{(inputProps: any) => <Field {...inputProps} />}</InputMask>
    );

    const onButtonPress = (keyButton: string, index: number) => {
        if (keysButtons.includes(keyButton)) {
            if (keyButton === 'Backspace') {
                EditPhoneNum(phoneNum.substring(0, phoneNum.length - 1));
            } else if (phoneNum.length < 10) {
                EditPhoneNum(phoneNum + keyButton);
            }
            focusElement.current = index;
        }
    }

    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'ArrowRight') {
            focusElement.current === 12 ? focusElement.current = 0 : focusElement.current++;
        } else if (e.key === 'ArrowLeft') {
            focusElement.current === 0 ? focusElement.current = 12 : focusElement.current--;
        }
        if (focusElement.current === 11)  buttonRef.current.focus();
        else if (focusElement.current === 12) outRef.current.focus();
        else keyboardRef.current.children[focusElement.current].focus();
    }

    useEffect(() => {
        keyboardRef.current.children[0].focus();
        document.addEventListener('keydown', handleKeyDown)
        return () => {
            document.removeEventListener('keydown', handleKeyDown)
        };
    }, [])

    type ErrorsType = {
        checkbox: string
    };

    return (
        <div>
            <Formik
                initialValues={{phone: '', checkbox: false}}
                onSubmit={submit}
                validateOnMount
                validate={(values) => {
                    const errors = {} as ErrorsType;
                    if (!values.checkbox) errors.checkbox = 'Required';
                    return errors;
                }}
            >
                {({isValid, handleBlur}) => {
                    return (
                        <Form className={style.form}
                              onKeyDown={(e: React.KeyboardEvent<HTMLFormElement>)=> onButtonPress(e.key, 0)}
                              onBlur={(e: React.FocusEvent<HTMLFormElement>) => handleBlur(e) }>
                        <img className={style.addNumberText} src={addNumberText} alt='Введите ваш номер мобильного телефона' width='272' />
                        <CustomInput
                            className={style.phone}
                            mask="+7(999)999-99-99"
                            value={phoneNum}
                            name="phone"
                            placeholder='+7(___)___-__-__'
                         />
                        <img className={style.sign__text} src={signText} alt='и с Вами свяжется наш менеждер для дальнейшей консультации' width='315'/>
                        <div className={style.keyboard} ref={keyboardRef}>
                            {
                                keysButtons.map((keyButton: string, index: number) => {
                                    return <Field
                                        key={index}
                                        onClick={()=>onButtonPress(keyButton, index)}
                                        className={style.keyboard__button + ' ' + (keyButton === 'Backspace' && style.keyboard__backspace)}
                                        type="button"
                                        value={keyButton === 'Backspace' ? 'Стереть' : keyButton}
                                        name={keyButton}
                                    />})
                            }
                        </div>

                        <div className={style.agreement}>
                            <label className={style.check}>
                                <Field className={style.check__input} type='checkbox' name='checkbox'/>
                                <span className={style.check__box} />
                            </label>
                            <img src={checkboxText} alt='Согласие на обработку персональных данных' width='214' height='30'/>
                        </div>
                        <button className={style.button} ref={buttonRef} type="submit" disabled={!isValid || phoneNum.length < 10}>
                            Подтвердить номер
                        </button>
                        <button className={style.out} ref={outRef} />
                    </Form>
                )}}
            </Formik>
        </div>
    )
}