import Vue from 'vue'
import VeeValidate from 'vee-validate'

const dictionary = {
    en:{
        messages:{
            required(field){
                return field + '-โปรดบันทึกข้อมูลให้ครบถ้วน'
            },
            min(field, args){
                return field + '-ต้องบันทีกข้อมูลอย่างน้อย ' + args[0] + ' ตัวอักษร'
            }
        },
        attributes:{
            firstName: 'ชื่อ',
            lastName: 'นามสกุล'
        }
    }
}

Vue.use(VeeValidate, {dictionary: dictionary})
    