package com.student.controller.web.user.api;

import com.student.ResponseDto.StudentRegiResponse;
import com.student.dto.StudentRequestDTO;


public interface User
{

	StudentRegiResponse register(StudentRequestDTO dto);

}
