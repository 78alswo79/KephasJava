package org.minjaeacademy.practice;

public class TestCircle {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
//		Circle c1 = new Circle();
//		System.out.println("원의 반경은 "+ c1.getRedius() + "이고 면적은 "+ c1.getArea() + " 색깔은 " + c1.getColor());
//		
//		Circle c2 = new Circle(2.0);
//		System.out.println("원의 반경은 "+ c2.getRedius() + "이고 면적은 "+ c2.getArea() + " 색깔은 " + c2.getColor());
		
		Circle c4 = new Circle();
		c4.setRadius(5.5);
		
		System.out.println("radius is: "+ c4.getRedius());
		c4.setColor("green");
		System.out.println("color is: "+ c4.getColor());
		
		//System.out.println(c4.setRadius(4.4));
		Circle c5 = new Circle(5.5);
		System.out.println(c5.toString());
		
		Circle c6 = new Circle(6.6);
		System.out.println(c6);
		System.out.println(c6.toString());
		System.out.println("Operator '+' invokes toString() too: " + c6);
		
	}

}
