import Swal from 'sweetalert2';

const FormModal = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    value: 'email',
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });


const handleFormModal = async() => {
    const { value: formValues } = await Swal.fire({
        title: "이메일과 연락처 입력",
        html: `
          <label for="email">이메일</label>
          <input id="email" class="swal2-input" placeholder="이메일을 입력하세요" required>
  
          <label for="contactHead">연락처</label>
          <input id="contactHead" class="swal2-input" placeholder="010" required>
  
          <label for="contactBody">-</label>
          <input id="contactBody" class="swal2-input" placeholder="1234" required>
  
          <label for="contactTail">-</label>
          <input id="contactTail" class="swal2-input" placeholder="5678" required>
        `,
        focusConfirm: false,
        preConfirm: () => {
          const email = Swal.getPopup().querySelector('#email').value;
          const contactHead = Swal.getPopup().querySelector('#contactHead').value;
          const contactBody = Swal.getPopup().querySelector('#contactBody').value;
          const contactTail = Swal.getPopup().querySelector('#contactTail').value;
  
          return { email, contact: `${contactHead}-${contactBody}-${contactTail}` };
        },
        showCancelButton: true,
        confirmButtonText: "확인",
        cancelButtonText: "취소",
      });
  
      if (formValues) {
        const { email, contact } = formValues;
        Swal.fire(`입력한 이메일: ${email}\n입력한 연락처: ${contact}`);
      } else {
        Swal.fire('입력이 취소되었습니다.', '', 'info');
      }
}

export default handleFormModal;