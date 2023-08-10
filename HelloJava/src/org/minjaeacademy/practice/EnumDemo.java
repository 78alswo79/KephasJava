package org.minjaeacademy.practice;

public class EnumDemo {
	public enum Season {
		
		SPRING, SUMMER, AUTUMN, WINTER
	}
	
	public enum UserStatus {
		PENDING, ACTIVE, BLOCKED
		
	}
	public static void main(String[] args) {
	/* (S) 같은 클래스내 Enum테스트 코드*/
		UserStatus active = UserStatus.ACTIVE;

		System.out.println(active.name());
		
		String _ifTrue = UserStatus.valueOf("BLOCKED").toString();
		if (_ifTrue.equals("BLOCKED")) 
		{
			
			System.out.println("True!!");
			System.out.println("\n");
		}
		
		UserStatus[] _array = UserStatus.values();
		
		for (UserStatus status : UserStatus.values()) 
		{
			System.out.println(status.name());
			System.out.println(status.ordinal());
			System.out.println(status.valueOf(_ifTrue));
			System.out.println("\n");
		}
		
		
		for (Season ss : Season.values()) 
		{
			System.out.println("0");
			switch (ss) {
				case SPRING:
					System.out.println("SPRING!!");
					break;
				case SUMMER:
					System.out.println("SUMMER!!");
					break;
				case AUTUMN:
					System.out.println("AUTUMN!!");
					break;
				case WINTER:
					System.out.println("WINTER!!");
					break;
				default:
					System.out.println("DEfault");
					break;
			}
		}
		System.out.println("\n");
	/* (E) 같은 클래스내 Enum테스트 코드*/
		
		
	/* (S) OOP Enum 데스트 코드 */
		TestEunmOOPDemo testEnum = TestEunmOOPDemo.KEPHAS;
		System.out.println(testEnum.name());
		
		for (TestEunmOOPDemo status : TestEunmOOPDemo.values()) 
		{
			switch (status) {
				case LGCNS:
					System.out.println("LGCNS!!");
					break;
				case SAMSUNGSDS:
					System.out.println("SAMSUNGSDS!!");
					break;
				case KEPHAS:
					System.out.println("KEPHAS!!");
					break;
				case VAPORESSO:
					System.out.println("VAPORESSO!!");
					break;
				default:
					System.out.println("HYUNDAEAUOTOREVER");
					break;
			}
			
		}
	/* (E) OOP Enum 데스트 코드 */
		
	}
	
}
