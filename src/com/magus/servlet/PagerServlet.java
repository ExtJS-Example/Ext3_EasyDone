package com.magus.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Random;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONObject;

import com.magus.bean.Human;
import com.magus.bean.PageBean;

/**
 * 对应Chp21
 * @author 	lian
 * @date 	2014-4-25
 * @time	上午9:48:03
 */
public class PagerServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

    public PagerServlet() {
        super();
    }

    public void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    	// 首先设置页面信息
    	response.setContentType("text/html;charset=utf-8");
    	PrintWriter out = response.getWriter();
    	
    	// 获取参数
    	int start = Integer.parseInt(request.getParameter("start"));	// 起始条数
    	int limit = Integer.parseInt(request.getParameter("limit"));	// 每页条数
    	
    	int totalProperty = 86;
    	int end = start + limit;
    	if(end > totalProperty)	end = totalProperty;
    	
    	// 本Servlet为表格分页准备数据
    	List<Human> list = new ArrayList<Human>();
    	Random rnd = new Random();
    	for(int i=start; i<end; i++) {
    		int sexId = rnd.nextInt(10);
    		list.add(new Human(i, "无名氏"+i, sexId%2==0?"男":sexId%3==0?"女":"人妖", new Date(), "博士", "这是一行测试数据!!"));
    	}
    	
    	// 定义符合分页所需要的格式
    	PageBean pageBean = new PageBean(totalProperty, list);
    	JSONObject jObject = JSONObject.fromObject(pageBean);
    	
    	out.println(jObject.toString());
    	out.flush();
    	out.close();
    }
    
    public void print(HttpServletRequest request, String para) {
    	System.out.println(para+"--"+request.getParameter(para));
    }

}
