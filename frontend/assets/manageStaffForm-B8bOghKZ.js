import{r as c,u as B,o as H,a as M,c as p,b as o,t as y,d as D,e as a,v as r,l as b,E as _,h as U,i as m,B as k}from"./index-BHu86sKb.js";import{s as g}from"./staff_service-heQzJUD3.js";import{S as P}from"./sweetalert2.esm.all-DwEdJQJv.js";const z={class:"w-full h-full rounded-xl bg-white"},j={class:"rounded-xl w-full h-full bg-white"},E={class:"rounded-xl w-full h-full bg-white"},W={class:"text-xl font-bold text-center whitespace-nowrap sticky py-6 top-0 bg-white z-30"},F={class:"space-y-4 px-6 pb-5"},K={key:0},L=["disabled"],X={class:"sm:flex sm:space-x-2 flex-1"},A={class:"w-full"},$=["disabled"],q={class:"w-full"},Q=["disabled"],R=["disabled"],G={key:1,class:"sm:flex sm:space-x-2"},I={class:"flex justify-end space-x-2 p-6 sticky bottom-0 bg-white z-30"},J={key:0,type:"submit",class:"inline-flex justify-center py-2 px-4 border border-transparent shadow-sm font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 whitespace-nowrap"},ee={__name:"manageStaffForm",props:{action:{type:String},id:{type:String}},setup(T){const v=c(null),f=U(),d=B(),n=T;c(!1);const C=i=>{switch(i){case"add":return"Thêm Tài Khoản";case"update":return"Cập Tài Khoản";case"view":return"Chi tiết Tài Khoản";default:return"Hành động không xác định"}},x=()=>{f.go(-1)},V=async()=>{(await P.fire({title:"Xác nhận lưu?",text:"Bạn có chắc muốn lưu các thay đổi này?",icon:"question",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Lưu",cancelButtonText:"Hủy"})).isConfirmed&&await S()},S=async()=>{var i,e;try{if(l.value!==w.value){d.error("Mật khẩu nhập lại không khớp");return}else{if(n.action==="add"){s.value.Password=l.value;const t=await g.create(s.value);k.emit("reload"),d.success(t.message),f.go(-1)}if(n.action==="update"){l.value?s.value.Password=l.value:delete s.value.Password;const t=await g.update(n.id,s.value);k.emit("reload"),d.success(t.message),f.go(-1)}}}catch(t){console.log(t);const u=((e=(i=t.response)==null?void 0:i.data)==null?void 0:e.message)||"Có lỗi xảy ra. Vui lòng thử lại.";d.error(u)}};function h(){const i=v.value;if(i){const e=window.innerHeight,t=window.innerWidth,u=e-48,N=t-48;i.style.maxHeight=`${u}px`,i.style.maxWidth=`${N}px`}}const s=c({MSNV:"",HoTenNV:"",SoDienThoai:"",ChucVu:"ThuThu",DiaChi:""}),l=c(""),w=c("");return H(async()=>{var i,e;if(h(),window.addEventListener("resize",h),n.action!=="add")try{const t=await g.get(n.id);s.value={...t}}catch(t){const u=((e=(i=t.response)==null?void 0:i.data)==null?void 0:e.message)||"Có lỗi xảy ra. Vui lòng thử lại.";d.error(u)}}),M(()=>{window.removeEventListener("resize",h)}),(i,e)=>(m(),p("div",null,[o("div",{class:"absolute inset-0 bg-black opacity-50 z-30",onClick:x}),o("div",{ref_key:"formContainer",ref:v,class:"fixed bg-white z-40 box-border overflow-y-auto overflow-x-hidden rounded-xl w-fit top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 border-2 shadow-md",style:{"scrollbar-gutter":"stable","clip-path":"inset(0 round 10px)"}},[o("div",z,[o("div",j,[o("div",E,[o("h2",W,y(C(n.action)),1),o("form",{onSubmit:D(V,["prevent"]),class:""},[o("div",F,[n.action!=="add"?(m(),p("div",K,[e[7]||(e[7]=o("label",{for:"msnv",class:"block font-medium text-gray-700 whitespace-nowrap"},"Mã số nhân viên",-1)),a(o("input",{type:"text",id:"msnv","onUpdate:modelValue":e[0]||(e[0]=t=>s.value.MSNV=t),disabled:!0,class:"mt-1 block w-full px-3 py-2 border border-[#aaa] rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"},null,512),[[r,s.value.MSNV]])])):b("",!0),o("div",null,[e[8]||(e[8]=o("label",{for:"name",class:"block font-medium text-gray-700 whitespace-nowrap"},"Họ và tên",-1)),a(o("input",{type:"text",id:"name","onUpdate:modelValue":e[1]||(e[1]=t=>s.value.HoTenNV=t),disabled:n.action==="view",placeholder:"Nhập tên sách",class:"mt-1 block w-full px-3 py-2 border border-[#aaa] rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"},null,8,L),[[r,s.value.HoTenNV]])]),o("div",X,[o("div",A,[e[10]||(e[10]=o("label",{for:"chuc-vu",class:"block font-medium text-gray-700 whitespace-nowrap"},"Chức vụ",-1)),a(o("select",{id:"chuc-vu","onUpdate:modelValue":e[2]||(e[2]=t=>s.value.ChucVu=t),disabled:n.action==="view",class:"mt-1 px-3 py-2 border border-[#aaa] rounded-md block w-full shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"},e[9]||(e[9]=[o("option",{class:"text-sm",value:"ThuThu"},"Thủ thư",-1),o("option",{class:"text-sm",value:"Admin"},"Admin",-1)]),8,$),[[_,s.value.ChucVu]])]),o("div",q,[e[11]||(e[11]=o("label",{for:"phone",class:"block font-medium text-gray-700 whitespace-nowrap"},"Số điện thoại",-1)),a(o("input",{type:"tel",id:"phone","onUpdate:modelValue":e[3]||(e[3]=t=>s.value.SoDienThoai=t),disabled:n.action==="view",placeholder:"Nhập số điện thoại",class:"mt-1 block w-full px-3 py-2 border border-[#aaa] rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"},null,8,Q),[[r,s.value.SoDienThoai]])])]),o("div",null,[e[12]||(e[12]=o("label",{for:"tac-gia",class:"block font-medium text-gray-700 whitespace-nowrap"},"Địa chỉ",-1)),a(o("input",{type:"text",id:"dia-chi","onUpdate:modelValue":e[4]||(e[4]=t=>s.value.DiaChi=t),disabled:n.action==="view",placeholder:"Xã/Phường, Quận/Huyện, Tỉnh/Thành phố",class:"mt-1 block w-full px-3 py-2 border border-[#aaa] rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"},null,8,R),[[r,s.value.DiaChi]])]),n.action!=="view"?(m(),p("div",G,[o("div",null,[e[13]||(e[13]=o("label",{for:"pass1",class:"block font-medium text-gray-700 whitespace-nowrap"},"Mật khẩu",-1)),a(o("input",{type:"password",id:"pass1","onUpdate:modelValue":e[5]||(e[5]=t=>l.value=t),placeholder:"Nhập mật khẩu",class:"mt-1 block w-full px-3 py-2 border border-[#aaa] rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"},null,512),[[r,l.value]])]),o("div",null,[e[14]||(e[14]=o("label",{for:"pass2",class:"block font-medium text-gray-700 whitespace-nowrap"},"Nhập lại mật khẩu",-1)),a(o("input",{type:"password",id:"pass2","onUpdate:modelValue":e[6]||(e[6]=t=>w.value=t),placeholder:"Nhập lại mật khẩu",class:"mt-1 block w-full px-3 py-2 border border-[#aaa] rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"},null,512),[[r,w.value]])])])):b("",!0)]),o("div",I,[o("button",{type:"button",onClick:x,class:"inline-flex justify-center py-2 px-4 border border-transparent shadow-sm font-medium rounded-md text-white bg-gray-400 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 whitespace-nowrap"},y(n.action==="view"?"Thoát":"Hủy"),1),n.action!=="view"?(m(),p("button",J," Xác Nhận ")):b("",!0)])],32)])])])],512)]))}};export{ee as default};