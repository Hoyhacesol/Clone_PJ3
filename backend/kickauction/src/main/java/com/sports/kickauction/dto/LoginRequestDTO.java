package com.sports.kickauction.dto;

import lombok.*;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class LoginRequestDTO {
  private String userId;
  private String userPw;
}
