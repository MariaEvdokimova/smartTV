import React, {useState} from "react";
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
    const keysButtons = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'Backspace', '0'];

    const submit = (values: any, { setSubmitting }: {setSubmitting: (isSubmitting: boolean) => void }) => {
        navigate('/final');
        setSubmitting(false);
    }

    const CustomInput = (props: any) => (
        <InputMask {...props}>{(inputProps: any) => <Field {...inputProps} />}</InputMask>
    );

    const onButtonPress = (keyButton: string) => {
        if (keyButton === 'Backspace') {
            EditPhoneNum(phoneNum.substring(0, phoneNum.length - 1));
        } else if (phoneNum.length < 10 && keysButtons.includes(keyButton)) {
            EditPhoneNum(phoneNum + keyButton);
        }
    }

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
                              onBlur={(e: React.FocusEvent<HTMLFormElement>) => handleBlur(e) }>
                        <img className={style.addNumberText} src={addNumberText} alt='Введите ваш номер мобильного телефона' width='272' />
                        <CustomInput
                            className={style.phone}
                            mask="+7(999)999-99-99"
                            value={phoneNum}
                            name="phone"
                            placeholder='+7(___)___-__-__'
                            onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>)=> onButtonPress(e.key)}
                         />
                        <img className={style.sign__text} src={signText} alt='и с Вами свяжется наш менеждер для дальнейшей консультации' width='315'/>
                        <div className={style.keyboard}>
                            {
                                keysButtons.map((keyButton: string, index: number) => {
                                    return <Field
                                        key={index}
                                        onClick={()=>onButtonPress(keyButton)}
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
                        <button className={style.button} type="submit" disabled={!isValid || phoneNum.length < 10}>
                            Подтвердить номер
                        </button>
                        <button className={style.out} />
                    </Form>
                )}}
            </Formik>
        </div>
    )
}