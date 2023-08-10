package org.minjaeacademy.practice;

public class CustomExceptionDemo extends Exception {

	public CustomExceptionDemo() {
		super();
		// TODO Auto-generated constructor stub
	}

	public CustomExceptionDemo(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
		super(message, cause, enableSuppression, writableStackTrace);
		// TODO Auto-generated constructor stub
	}

	public CustomExceptionDemo(String message, Throwable cause) {
		super(message, cause);
		// TODO Auto-generated constructor stub
	}

	public CustomExceptionDemo(String message) {
		super(message);
		// TODO Auto-generated constructor stub
	}

	public CustomExceptionDemo(Throwable cause) {
		super(cause);
		// TODO Auto-generated constructor stub
	}
	
	public static void someMethod() throws CustomExceptionDemo {
		throw new CustomExceptionDemo("Something bad.");
		
	}
	
}
